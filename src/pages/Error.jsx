import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error">
      <h1>Uh Oh! we've got a problem!</h1>
      <p>{error.message || error.statusText}</p>
      <div class="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" class="btn btn--dark">
          <span>Go Home</span>
          <HomeIcon width={20} />
        </Link>
      </div>
    </div>
  );
}
