import { Icon } from '@mui/material';
import React from 'react';

const sizesMap = {
  'small': { size: 17, extraSize: 10 },
  'medium': { size: 25, extraSize: 13 },
  'large': { size: 25, extraSize: 15 },
}

const ComposedIcon = ({
  icon,
  extraIcon,
  size = 'small',
  color = 'inherit',
  position = 'bottom-end',
  disabled,
}) => (
  <div style={{
    position: 'relative',
    cursor: 'default'
  }}>
    <div style={{ lineHeight: '0px' }}>
      <Icon
        className={Array.isArray(icon) ? icon.join(' ') : `fa fa-${icon}`}
        style={{
          fontSize: sizesMap[size].size,
          width: '1.25em'
        }} />
    </div>
    <div
      style={{
        lineHeight: '0px',
        position: 'absolute',
        textShadow: '0.75px 0px 0.5px #FFF, 0px 0.75px 0.5px #FFF, -0.75px 0px 0.5px #FFF, 0px -0.75px 0.5px #FFF',
        bottom: position.includes('bottom') ? '-4px' : null,
        top: position.includes('top') ? '-4px' : null,
        left: position.includes('start') ? '-4px' : null,
        right: position.includes('end') ? '-4px' : null,
      }}>
      <Icon
        color={color}
        className={Array.isArray(extraIcon) ? extraIcon.join(' ') : `fa fa-${extraIcon}`}
        style={{
          fontSize: sizesMap[size].extraSize,
          padding: '2px',
          color: disabled ? 'rgba(0, 0, 0, 0.35)' : null,
        }}
      />
    </div>
  </div>
)

export default ComposedIcon