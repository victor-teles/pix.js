import * as React from "react";
import { mdxComponents } from "../../app/docs/mdx-components";

// import MDXScopedRuntime from 'mdx-scoped-runtime/lib/components/MDXScopedRuntime'


// class DocsPreview extends React.Component {
//   render() {
//     const { entry } = this.props;
//     const rawContent = entry.getIn(["data", "body"], "");

//     return (
//       <div className="prose">
//         {/* <MDX
//           components={mdxComponents}
//         >
//           {rawContent}
//         </MDX> */}
//       </div>
//     );
//   }
// }

const DocsPreview = ({ entry }) => {
  // console.log(MDXScopedRuntime.default);
  return (
    <div>
      <h1>{entry.getIn(['data', 'title'])}</h1>
      <h2>{entry.getIn(['data', 'description'])}</h2>
      {/* <div className="text">{props.widgetFor('body')}</div> */}
      {/* <MDXScopedRuntime.default>{entry.getIn(['data', 'body'])}</MDXScopedRuntime.default> */}
    </div>
  );
};


window.DocsPreview = DocsPreview;
export default DocsPreview;
