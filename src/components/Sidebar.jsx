const Sidebar = ({children}) => {
    return (    
        <div className='flex flex-col text-white py-3 bg-blue-800 border-r-2'>
            <ul>
                {children}
                <hr></hr>
                <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Docs</li>
                <li className='py-2 pl-6 pr-14 hover:bg-blue-900 rounded-3xl'>Ayuda</li>
            </ul>
        </div>
    );
}

export default Sidebar;