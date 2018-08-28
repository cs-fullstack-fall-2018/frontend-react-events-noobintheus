class AddStringByButton extends component {
    constructor(props){
        super(props);
        this.state = {displayscore: this.props.name}
    }
}
buttonClick = () => {
    this.setState(
        {
        displayName:this.state.displayscore + "bleh"
        }
    )

};


