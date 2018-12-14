import React, { Component } from 'react';
import SvgUri from '../../lib/react-native-svg-uri/index';
import svgs from '../assets/svgs';

export default class Svg extends Component {
  render() {
    const {
      icon,
      color,
      size,
      style,
    } = this.props;
    let svgXmlData = svgs[this.props.icon];

    if (!svgXmlData) {
      let err_msg = `没有"${this.props.icon}"这个icon`;
      throw new Error(err_msg);
    }
    return (
      <SvgUri
        width={size}
        height={size}
        svgXmlData={svgXmlData}
        fill={color}
        style={style}
      />
    )
  }
}
