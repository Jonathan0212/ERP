import Actions from "./Actions";

function Header({setComponent,component}) {
  return (
    <div className="p-3 row justify-content-between bg-danger text-white" >
      <div className="col-12 col-md-auto">The Cellar</div>
      <div className="col-12 col-md-auto"> <Actions setComponent={setComponent} component={component}/></div>
    </div>
  );
}

export default Header;