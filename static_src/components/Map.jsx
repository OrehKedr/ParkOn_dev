import React, {Component} from 'react'
import { YMaps, Map, Placemark, ZoomControl, GeolocationControl } from "react-yandex-maps";

export default class YandexMap extends Component{

	static defaultProps = {
		mapData: {
			center: [59.93, 30.35], //координаты местоположения
			zoom: 15,
		},
		//координаты маркеров
		coordinates:  [
			[59.95, 30.38],
			[59.93, 30.35]
		]
	};

	render() {
		const { mapData , coordinates} = this.props;
		return (
			<YMaps >
				<Map defaultState={mapData} className="map">
					{coordinates.map((coordinate, key) => {
						return (
						<Placemark key={key} geometry={coordinate} />
						);
					})}
					<ZoomControl options={{ float: 'right' , size: "small", position: { right: 12, bottom: 250 }}} />
					<GeolocationControl options={{ float: 'left', position: { right: 12, bottom: 196 }}}/>
				</Map>
			</YMaps>
		);
	}
}


