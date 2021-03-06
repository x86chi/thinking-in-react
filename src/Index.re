// Entry point

[@bs.val] external document: Js.t({..}) = "document";

// We're using raw DOM manipulations here, to avoid making you read
// ReasonReact when you might precisely be trying to learn it for the first
// time through the examples later.

ReactDOMRe.render(
  <Product.Filterable products=Mock.proudcts />,
  document##querySelector("main"),
);
