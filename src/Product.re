module Row = {
  [@react.component]
  let make = (~product: Mock.product) => {
    let color = product.stocked ? "black" : "red";
    <tr>
      <td style={ReactDOM.Style.make(~color, ())}>
        {React.string(product.name)}
      </td>
      <td> {React.string(product.price)} </td>
    </tr>;
  };
};

module CategoryRow = {
  [@react.component]
  let make = (~category) => {
    <tr> <th colSpan=2> {React.string(category)} </th> </tr>;
  };
};

module Table = {
  [@react.component]
  let make = (~products: array(Mock.product)) => {
    let index = ref(-1);
    let rows =
      products
      ->Belt.Array.map(product => {
          let lastCategory = index^ === (-1) ? "" : products[index^].category;
          index := index^ + 1;
          let {category, name: key} = product;

          if (product.category !== lastCategory) {
            <React.Fragment key>
              <CategoryRow category key />
              <Row product />
            </React.Fragment>;
          } else {
            <Row product />;
          };
        })
      ->React.array;

    <table>
      <thead>
        <tr>
          <th> {React.string("Name")} </th>
          <th> {React.string("Price")} </th>
        </tr>
      </thead>
      <tbody> rows </tbody>
    </table>;
  };
};

module SearchBar = {
  [@react.component]
  let make = () => {
    <form>
      <input type_="text" placeholder="Search..." />
      <p>
        <input type_="checkbox" />
        {React.string(" Only show products in stock")}
      </p>
    </form>;
  };
};

module Filterable = {
  [@react.component]
  let make = (~products) => {
    <div> <SearchBar /> <Table products /> </div>;
  };
};
