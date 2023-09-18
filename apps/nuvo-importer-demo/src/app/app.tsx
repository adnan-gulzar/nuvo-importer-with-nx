// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NuvoImporter } from 'nuvo-react';
import styles from './app.module.css';

export function App() {
  return (
    <div>
      <NuvoImporter
        licenseKey={"license-key"}
        onResults={(res) => {
          console.log("result: ", res)
        }}
        settings={{
          developerMode: true,
          identifier: "contact_data",
          columns: [
            {
              key: "name",
              label: "Name",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
              key: "email",
              label: "Email",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
              key: "phone",
              label: "Phone",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
              key: "date",
              label: "Date",
              columnType: "string",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
          ]
        }}
      >
        Import contacts
      </NuvoImporter>
    </div>
  );
}

export default App;
