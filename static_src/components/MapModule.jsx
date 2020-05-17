import React, {Component} from 'react'
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl, Button} from "react-yandex-maps";


export default class MapModule extends Component{

    static defaultProps = {
        homeAddress: "Москва, ул. Барышиха, 51",
        //координаты маркеров (камер)
        coordinates:  [
           // [55.86, 37.64],
            [55.853411, 37.351747]
        ]
    };

    state = {
        homeRoute: {},
        geolocation: null,
        showRoute: false,
        //координаты местоположения
        mapData: {
            center: [55.853411, 37.351747],
            zoom: 9,
        }
    };

    handleApiAvaliable = ymaps => {
        this.ymaps = ymaps;
    };

    addRoute = () => {
        if (this.ymaps && this.map) {
            const { homeAddress } = this.props;
            const multiRoute = new ymaps.multiRouter.MultiRoute(
                {
                    // Описание опорных точек мультимаршрута (должно быть местоположение и дом)
                    referencePoints: [[55.853411, 37.351747], homeAddress],
                    // Параметры маршрутизации.
                    params: {
                        // Ограничение на максимальное количество маршрутов, возвращаемое маршрутизатором.
                        results: 1
                    }
                },
                {
                    // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                    boundsAutoApply: true,

                    // Внешний вид линии маршрута.
                    routeActiveStrokeWidth: 6,
                    routeActiveStrokeColor: '#4169E1',

                    // Задаем собственную картинку для последней путевой точки.
                    wayPointFinishIconLayout: "default#image",
                    wayPointFinishIconImageSize: [30, 30],
                    //wayPointFinishIconImageOffset: [-15, -15]
                }
            );

             this.map.geoObjects.add(multiRoute);
             this.homeRoute = multiRoute;
            this.setState({
                showRoute: true,
            });
        }
    };

    removeRoute = () => {
        this.map.geoObjects.remove(this.homeRoute);
        this.setState({
            showRoute: false,
            homeRoute: {}
        });
    };

    render() {

        const { coordinates } = this.props;
        const { mapData, showRoute } = this.state;
        const homeButton = <Button
                options={{maxWidth: 128 ,  position: {right: "40%", bottom: 100}}}
                data={{content: 'Закрыть'}}
                onClick={this.removeRoute}
            />;

        const closeButton = <Button
                options={{maxWidth: 128 ,  position: {right: "40%", bottom: 100}}}
                data={{content: 'Домой'}}
                onClick={this.addRoute}
            />;
        const contentButton = showRoute ? homeButton : closeButton;
        return (
                <YMaps>
                    <Map className = "map"
                         state={mapData}
                         instanceRef={ref => (this.map = ref)}
                         onLoad={ymaps => this.handleApiAvaliable(ymaps)}>
                        {coordinates.map((coordinate, key) => {
                            return (
                                <Placemark key={key} geometry={coordinate}
                                           properties = {{ balloonContent: "Содержимое балуна метки" , hintContent: "Хинт метки"}}
                                />
                            );
                        })}
                        <ZoomControl options={{float: 'right', size: "small", position: {right: 12, bottom: 250}}}/>
                        <GeolocationControl options={{float: 'left', position: {right: 12, bottom: 196}}} />
                        { contentButton }
                    </Map>
                </YMaps>

        );
    }
}


