import { useState } from 'react';
import { useActionDialogs } from 'react-dialog-mui';

export function PromptExample() {
  const { prompt } = useActionDialogs();
  const [name, setName] = useState('');

  const onSubmit = async () => {
    try {
      const newName = await prompt({
        title: 'Rename Query',
        message: 'New Query Name',
        value: name,
        saveLabel: 'Save',
      });

      // when user entered and submitted the value for new name
      setName(newName);
    } catch (err) {}
  };

  return (
    <>
      <button onClick={onSubmit}>Rename Query?</button>
      <div>
        <h5>New query name:</h5> {name}
      </div>
    </>
  );
}
