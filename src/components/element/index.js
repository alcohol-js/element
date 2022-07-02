import Col from './col';
import Row from './row';

const componentArr = [Col, Row];

const install = (Vue) => {
  componentArr.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};

export default {
  install,
  Col,
  Row,
};

export {
  Col,
  Row,
};
