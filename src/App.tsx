import { ActionDialogsContext } from "react-dialog-mui";
import { AlertExample } from "./components/AlertExample";
import { ChoiceExample } from "./components/ChoiceExample";
import { ConfirmExample } from "./components/ConfirmExample";
import {
  ModalExample,
  ModalExampleWithChildComponent,
  ModalExampleWithFormSubmit,
  ModalExampleWithManualDismiss,
} from "./components/ModalExample";
import { PromptExample } from "./components/PromptExample";

export default function App() {
  return (
    <ActionDialogsContext>
      <div
        style={{
          padding: "1rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        <h1>react-dialog-mui</h1>
        <div>
          <a href="https://github.com/synle/react-mui-action-dialog">
            Code repo
          </a>
        </div>

        <div>
          <h3>Alert Example</h3>
        </div>
        <div>
          <div>Simple Alert Example</div>
          <div>This is a simple example with alert.</div>
          <AlertExample />
        </div>

        <div>
          <h3>Choice Example</h3>
        </div>
        <div>
          <div>Simple Choice Example</div>
          <div>This is a simple example with choice.</div>
          <ChoiceExample />
        </div>

        <div>
          <h3>Confirm Example</h3>
        </div>
        <div>
          <div>Simple Confirm Example</div>
          <div>This is a simple example with confirm.</div>
          <ConfirmExample />
        </div>

        <div>
          <h3>Prompt Example</h3>
        </div>
        <div>
          <div>Simple Prompt Example</div>
          <PromptExample />
        </div>

        <div>
          <h3>Modal Example</h3>
        </div>
        <div>
          <div>Simple Modal Example</div>
          <div>This is a simple example with modal with custom content.</div>
          <ModalExample />
        </div>

        <div>
          <div>Simple Modal Example with ChildComponent</div>
          <div>
            This is a simple example that includes a child component defined
            somewhere else.
          </div>
          <ModalExampleWithChildComponent />
        </div>

        <div>
          <div>Simple Modal Example with manual dismiss</div>
          <div>
            The example shows how you can use `const modalRef =
            useActionDialogRef()` and `modalRef.current.dismiss()` to close this
            modal
          </div>
          <ModalExampleWithManualDismiss />
        </div>

        <div>
          <div>Simple Modal Example with Form Submit</div>
          <div>
            The example shows how you can use `modalRef` to programmitcally
            close out the dialog after the form submission
          </div>
          <ModalExampleWithFormSubmit />
        </div>
      </div>
    </ActionDialogsContext>
  );
}
