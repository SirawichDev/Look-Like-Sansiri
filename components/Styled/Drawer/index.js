import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RcDrawer from 'rc-drawer';

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,

  ...props
}) => {
  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <Fragment>
      <RcDrawer
        open={open}
        onMaskClick={toggleHandler}
        className={addAllClasses.join(' ')}
        {...props}
      >
        <div className="reusecore-drawer__close" onClick={toggleHandler} style={closeButtonStyle}>
          {closeButton}
        </div>
        {children}
      </RcDrawer>
      <div
        className="reusecore-drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </Fragment>
  );
};

Drawer.propTypes = {
  className: PropTypes.string,

  closeButton: PropTypes.element,

  width: PropTypes.string,

  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),

  drawerHandler: PropTypes.element.isRequired
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};

export default Drawer;
