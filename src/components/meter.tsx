import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { globalStyles, colors } from '../styles';

const SemicircularProgressBar = ({ percentage }: any) => {
  percentage = 20;
  const validPercentage = isNaN(percentage) || percentage < 0 || percentage > 100 ? 0 : percentage;

  const size = 200;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius; // Circumference of half-circle
  const strokeDashoffset = circumference - (circumference * validPercentage) / 100;

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Svg width={size} height={size / 2} viewBox={`0 0 ${size} ${size / 2}`}>
        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="white"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`rgba(255, 0, 0, ${validPercentage / 50})`}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default SemicircularProgressBar;
