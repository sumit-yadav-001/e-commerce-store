import Input from "../ui/Input";
import Button from "../ui/Button";

const AddAddressModal = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-5 rounded-t-2xl shadow-xl">

      <h2 className="font-semibold mb-3">Add Address</h2>

      <div className="space-y-2">
        <Input placeholder="Full Address" />
        <Input placeholder="City" />
      </div>

      <Button className="mt-4">Add</Button>

    </div>
  );
};

export default AddAddressModal;