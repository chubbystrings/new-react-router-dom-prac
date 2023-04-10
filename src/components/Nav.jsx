import React from "react";
import { Form, NavLink } from "react-router-dom";

import {  TrashIcon } from '@heroicons/react/24/solid'

import logomark from "../assets/logomark.svg";

export default function Nav( { userName }) {
  return (
    <nav>
      <NavLink to="/" aria-label="go to home">
        <img src={logomark} height={30} alt="logo" />
        <span>Budget</span>
      </NavLink>
      {
        userName && (
            <Form method="post" action="/logout" onSubmit={(event) => {
                if (!confirm('Delete User and all data?')) {
                    event.preventDefault();
                }
            }} >
                <button type="submit" className="btn btn--warning">
                    <span>Delete User</span>
                    <TrashIcon width={20} />
                </button>
            </Form>
        )
      }
    </nav>
  );
}
