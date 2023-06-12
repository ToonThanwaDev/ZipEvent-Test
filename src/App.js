import { useState } from "react";
import { toast } from "react-toastify";
import validateComplaint from "./validators/validateComplaint";
import Input from "./components/Input";
import Textarea from "./components/Textarea";

const initialInput = {
  name: "",
  surname: "",
  emailOrPhone: "",
  complain: ""
};

function App() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateComplaint(input);
      if (result) {
        setError(result);
      } else {
        const jsonData = JSON.stringify(input, null, 2);

        alert(jsonData);

        setError({});
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <div className="text-4xl text-center mt-10">แบบคำร้องเรียน</div>

        <div className="mt-10 flex justify-center">
          <label htmlFor="name" className="text-xl mr-5">
            ชื่อ:
          </label>
          <Input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChangeInput}
            error={error.name}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <label htmlFor="Surname" className="text-xl mr-5">
            นามสกุล:
          </label>
          <Input
            type="text"
            name="surname"
            value={input.surname}
            onChange={handleChangeInput}
            error={error.surname}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <label htmlFor="emailOrPhone" className="text-xl mr-5">
            Email หรือ เบอร์โทรศัพท์:
          </label>
          <Input
            type="text"
            name="emailOrPhone"
            value={input.emailOrPhone}
            onChange={handleChangeInput}
            error={error.emailOrPhone}
          />
        </div>
        <div className="mt-10 flex justify-center">
          <label htmlFor="Complain" className="text-xl mr-5">
            ข้อความร้องเรียน:
          </label>
          <Textarea
            type="text"
            name="complain"
            value={input.complain}
            onChange={handleChangeInput}
            error={error.complain}
          />
        </div>

        <button type="submit" className="text-center border-black border-2 mx-auto block mt-10">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
