export const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
