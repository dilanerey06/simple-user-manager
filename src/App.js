// Importing the custom hooks
import useSubmit from './hooks/useSubmit';
// Importing components
import Form from './components/Form';
import List from './components/List';

function App() {
  const [data, sendData] = useSubmit([
    [{ name: 'Name', lastName: 'Last Name', email: 'Email' }],
  ]);

  const submit = (user) => {
    sendData(user);
  };
  console.log(data);
  return (
    <div className='container-fluid bg-light vh-100 d-flex flex-row justify-content-evenly align-items-center p-0'>
      <Form submit={submit} />
      <List data={data} />
    </div>
  );
}

export default App;
