import React, { useRef, useEffect } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Form, useFetcher } from "react-router-dom";

export default function AddBudgetForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      formRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <div className="grid-xs">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="eg groceries"
            required
          />
        </div>
        <div className="grid-xs">
          <label htmlFor="newBudgetAmount">Budget Name</label>
          <input
            step="0.01"
            type="number"
            name="newBudgetAmount"
            id="newBudgetAmount"
            placeholder="eg 350"
            required
            inputMode="decimal"
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting...</span>
          ) : (
            <>
              <span>Create Budget</span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
}
