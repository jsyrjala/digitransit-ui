React          = require 'react'
Icon           = require '../icon/icon'
cx             = require 'classnames'
SuggestionUtil = require '../../util/suggestionUtils'

getIcon = (layer, iconClass) ->
  layerIcon =
    "favourite": "icon-icon_star"
    "address": "icon-icon_place"
    "stop": "icon-icon_bus-stop"
    "locality": "icon-icon_city"
    "station": "icon-icon_station"
    "localadmin": "icon-icon_city"
    "neighbourdood": "icon-icon_city"
    "route-BUS": "icon-icon_bus-withoutBox"
    "route-TRAM": "icon-icon_tram-withoutBox"
    "route-RAIL": "icon-icon_rail-withoutBox"

  defaultIcon = "icon-icon_place"
  <Icon img={layerIcon[layer] || defaultIcon} className={iconClass || ""}/>

SuggestionItem = (props) ->
  displayText = SuggestionItem.getName props.item.properties
  <span className={cx "search-result", props.item.type}>
    <span className={props.spanClass || ""}>
      {getIcon props.item.properties.layer, props.item.iconClass}
    </span>
    {displayText}
  </span>

SuggestionItem.getName =  (props) ->
  SuggestionUtil.getLabel(props)

module.exports = SuggestionItem
