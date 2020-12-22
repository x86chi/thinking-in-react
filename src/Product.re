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
  let make = (~products: array(Mock.product), ~filterText, ~inStockOnly) => {
    let index = ref(-1);
    let rows =
      products
      ->Belt.Array.map(product => {
          let lastCategory = index^ === (-1) ? "" : products[index^].category;
          index := index^ + 1;
          let {category, name: key} = product;

          let isFilterTarget =
            filterText->String.length > 0
            && !product.name->Js.String2.includes(filterText);
          let isOutOfStck = inStockOnly && !product.stocked;

          if (isFilterTarget || isOutOfStck) {
            React.string("");
          } else if (product.category !== lastCategory) {
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
  let make = (~filterText, ~setText, ~inStockOnly, ~setInStock) => {
    <form>
      <input
        type_="text"
        placeholder="Search..."
        value=filterText
        onChange={event => {setText(ReactEvent.Form.target(event)##value)}}
      />
      <p>
        <input
          type_="checkbox"
          checked=inStockOnly
          onClick={_ => setInStock(x => !x)}
        />
        {React.string(" Only show products in stock")}
      </p>
    </form>;
  };
};

module Filterable = {
  [@react.component]
  let make = (~products) => {
    let (filterText, setText) = React.useState(_ => "");
    let (inStockOnly, setInStock) = React.useState(_ => false);

    <div>
      <SearchBar filterText setText inStockOnly setInStock />
      <Table filterText inStockOnly products />
    </div>;
  };
};
