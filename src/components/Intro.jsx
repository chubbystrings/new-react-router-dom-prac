import React from "react";
import { Form } from "react-router-dom";

import { UserPlusIcon } from "@heroicons/react/24/solid";

import illustration from "../assets/illustration.jpeg";

export default function Intro() {
  return (
    <div className="intro">
      <div>
        <h1>
          Take control of <span>your money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom start your
          journey today.
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            required
            placeholder="what is your name"
            aria-label="Your name"
            autoComplete="given-name"
          />
          <input type="hidden" name="_action" value="newUser" />
          <button className="btn btn--dark">
            <span>Create account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt="person with money"  width={600}/>
    </div>
  );
}
