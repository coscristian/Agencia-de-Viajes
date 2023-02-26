import airplane from 'media/airplane.png';

const NavBar = () => {
  return (
    <header className="bg-blue-800 flex flex-row justify-between border-b-2">
      <div className="flex flex-row">
        <img className="w-16 ml-4 mr-2" src={airplane} alt="Logo ViajaYa" />
        <h1 class="title self-center text-white">ViajaYa</h1>
      </div>
      <div className="flex flex-row px-4 hover:bg-blue-900">
        <div className="self-center pr-2 text-white font-bold">ADMIN</div>
        <img
          class="self-center w-10 h-10 rounded-full"
          src="https://flowbite.com/application-ui/demo/images/users/neil-sims.png"
          alt="Logo Admin"
        />
      </div>
    </header>
  );
};

export default NavBar;