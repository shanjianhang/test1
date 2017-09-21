var HeadCard=React.createClass({
	propTypes:{
		title: React.PropTypes.string.isRequired
	},
	changeTitle:function(e){
		this.setState({
			title: e.target.value
		})
	},
	getDefaultProps:function(){
		return {
			title: "这是一个head"
		}
	},
	getInitialState:function(){
		return {
			title: this.props.title
		}
	},
	render:function(){
		var _this=this;
		return React.createElement("div",{
			className:"head"
		},
			React.createElement("div",{
				className:"head-title-show"
			},this.state.title),
			React.createElement("input",{
				className: "head-title-change",
				defaultValue: this.props.title,
				onBlur: this.changeTitle
			})
		)
	}
});
ReactDOM.render(
	React.DOM.div({
		className: "appMainContain"
	},
	<HeadCard />),
	document.querySelector(".appMain")
	)