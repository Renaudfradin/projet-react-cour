function Containerss(props) {
    const { children } = props;
    return(
        <div style = {{ border: '5px solid black'}}>
            {children}
            <h1>hello Container</h1>
        </div>
    );
}
export default Containerss;