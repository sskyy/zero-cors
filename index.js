var cors = require('cors')

module.exports = {
  bootstrap : function(){
    APP.use(cors({credentials:true,origin:true}))
  }
}