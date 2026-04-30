import Input from "../ui/Input";
import Button from "../ui/Button";

const AddCardForm = () => {
  return (
    <div className="space-y-2">
      <Input placeholder="Card Number" />
      <div className="flex gap-2">
        <Input placeholder="MM/YY" />
        <Input placeholder="CVV" />
      </div>
      <Button>Add Card</Button>
    </div>
  );
};

export default AddCardForm;