import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className=" container mx-auto flex justify-between border-b-2 pb-2 mt-10">
            <h2 className="text-4xl font-bold">Knowledge cafe</h2>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;