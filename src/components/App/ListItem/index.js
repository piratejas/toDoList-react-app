
function ListItem(props){
    return <li key = {props.key}>{props.text}{props.children}</li>;
};

export default ListItem;