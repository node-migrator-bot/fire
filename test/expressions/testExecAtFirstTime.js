module.exports = {
	name:"testExecAtFirstTime",
	implementation:function() {
		var self = this
		if(this._getParentVar("testExecAtSecondTimeCount") == undefined) {
			this._setParentVar("testExecAtSecondTimeCount", 0)
			self._skip()
		} else if(this._getParentVar("testExecAtSecondTimeCount") == 1) {
			this._setParentVar("testExecAtSecondTimeCount", this._getParentVar("testExecAtSecondTimeCount") +1)
			this._runInput({
				_resultCallback: function(res) {
					self._skip()
				}
			})
		}else {
			this._setParentVar("testExecAtSecondTimeCount", this._getParentVar("testExecAtSecondTimeCount") +1)
			self._skip()
		}
	}
}