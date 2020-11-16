function Title(props) {
    const {titre} = props;
    console.log(document.title);
    return (
        <div>
            <h1>{titre}</h1>
        </div>
    );
}
export default Title;