import React from "react";
import { useLocation } from "react-router-dom";

const Redirect = () => {
  const location = useLocation();

  //https://login-goole.vercel.app/redirect/facebook?code=AQCrfLSN_uEv1UWLoBvkdqMY5_AtbliJfsyH3kA59mOs1RFEfKCppUlT3g6eE3pQWtdf3yDP_BTgU3stIrBndodnxby7GOKfJ9tPsGoKzn3mnarVjMuUZuPQPCc3G-bBNgFuh3r2402TRjBEnK3qwABAp2jUuOLIDL_gFb1eXaWI0SBC7Yj7x_5d-ttOyNXWyP7Sy4T86wzweRYWQz8BfgfrHzCT8SsBg1NOfQguQ9R4-8n_op6zig8KcssEgGZHKgkYMtx0Ermb5ze4hzOy_MG2bZEisBuXCnUQ5O8kKedoU0yDye8hWugOgknXXFB51MSlSJajya1dk0h3tALUjD9OH8lUBRlspiaC1-CHRco-V8lRBTrKRXth1RwvBh2SQ0w#_=_

  console.log(location);

  return <div>hwqugduiqwgdiuqwg</div>;
};

export default Redirect;
