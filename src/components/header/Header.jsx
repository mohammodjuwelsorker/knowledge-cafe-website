import profile from '../../assets/images/profile.png'


const Header = () => {

    
    return (
        <div className='md:flex justify-between items-center p-8 border-b-2 mb-8'>
            <h2 className="text-5xl text-black font-bold">Knowledge cafe</h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;