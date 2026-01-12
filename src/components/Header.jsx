import logo from '../../assets/hero_section/logo.avif';

function Header() {
  return (
    <div className="header p-[12px] text-center">
      <div>
        <img className="max-w-[160px] m-auto! block w-full" src={logo} alt="sculptique_logo" />
      </div>
    </div>
  );
}

export default Header;
