import { mergeDeep } from '../utilities/utilities.merge'
import { v4 as uuidv4 } from 'uuid'

function Chart(ctx, config) {
  this.initialize(ctx, config);

  return this;
}

Chart.prototype.initialize = (ctx, config) => {
  let that = this;

  let config = mergeDeep(defaultConfig, config);

  let canvas = ctx && ctx.canvas;
  let height = canvas && canvas.height;
  let width = canvas && canvas.width;

  that.id = uuidv4();
  that.ctx = ctx;
  that.canvas = canvas;
  that.config = config;
  that.width = width;
  that.height = height;
  that.aspectRatio = height ? width / height : null;
  
  that.chart = that;
  that.controller = that;
}


export default Chart;
