config = require('../../../config')
React = require 'react'
{cityBikeSearchRequest} = require '../../../action/city-bike-actions'
CityBikeMarker = require './city-bike-marker'
ComponentUsageExample = require('../../documentation/ComponentUsageExample').default

class CityBikeMarkerContainer extends React.Component

  @description:
    <div>
      <p>
        Renders all citybike stations if zoom is over 14.
        Requires map to be found in props.
      </p>
      <ComponentUsageExample description="">
        <CityBikeMarkerContainer/>
      </ComponentUsageExample>
    </div>

  @contextTypes:
    getStore: React.PropTypes.func.isRequired
    executeAction: React.PropTypes.func.isRequired

  componentWillMount: ->
    data = @context.getStore('CityBikeStore').getData()
    @context.executeAction cityBikeSearchRequest if not data?.stations?
    @context.getStore('CityBikeStore').addChangeListener @onCityBikeChange

  componentDidMount: ->
    @props.map.on 'zoomend', @onMapZoom

  componentWillUnmount: =>
    @props.map.off 'zoomend', @onMapZoom
    @context.getStore('CityBikeStore').removeChangeListener @onCityBikeChange

  onMapZoom: =>
    @forceUpdate()

  onCityBikeChange: =>
    @forceUpdate()

  getStations: ->
    stations = []
    data = @context.getStore('CityBikeStore').getData()

    data?.stations?.forEach (station) =>
      #TODO: set showName
      stations.push <CityBikeMarker
        key={station.id}
        map={@props.map}
        layerContainer={@props.layerContainer}
        station={station}
      />
    stations

  render: ->
    <div>{if @props.map.getZoom() >= config.cityBike.cityBikeMinZoom then @getStations() else ""}</div>

module.exports = CityBikeMarkerContainer
