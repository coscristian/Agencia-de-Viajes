import admin1 from 'media/admin1.png'

const Profile = () => {
    return (
            <div className="bg-gray-100 h-screen flex flex-row justify-center items-center">
                <div className="flex flex-col w-1/6 mx-5">
                    <div className='bg-white p-4 rounded-lg'>
                        <img className="h-48 rounded-lg" src={admin1} alt="" />
                        <div className='py-2'>
                            <h2 className='font-bold'>Jane Doe</h2>
                            <p className='font-medium'>Owner at Her Company Inc</p>
                            <hr />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quasi magni repellendus, eligendi saepe accusantium. Iste exercitationem enim nostrum</p>
                    </div>
                    
                    <div className="my-4 bg-white p-4 rounded-lg">
                        <h3 className='font-bold'>Similar Profiles</h3>
                        <div className="grid grid-cols-3 py-2">
                            <img class="self-center w-10 h-10 rounded-full"
                                src="https://flowbite.com/application-ui/demo/images/users/neil-sims.png" alt="Logo Admin"/>
                            
                            <img class="self-center w-10 h-10 rounded-full"
                                src="https://flowbite.com/application-ui/demo/images/users/neil-sims.png" alt="Logo Admin"/>
                            
                            <img class="self-center w-10 h-10 rounded-full"
                                src="https://flowbite.com/application-ui/demo/images/users/neil-sims.png" alt="Logo Admin"/>
                            <p>Carlos</p>
                            <p>Cristian</p>
                            <p>Sandra</p>
                        </div>  
                    </div>
                </div>
                <div className="flex flex-col bg-white h-80 p-4 rounded-lg">
                    <div className="flex flex-col">
                        <h3>About</h3>
                        <div className="grid grid-cols-4 gap-3">
                            
                            <p className="font-bold">First Name</p>
                            <p className="font-light">Jane</p>
                            <p className="font-bold">Last Name</p>
                            <p className="font-light">Doe</p>

                            <p className="font-bold">Gender</p>
                            <p className="font-light">Female</p>
                            <p className="font-bold">Phone</p>
                            <p className="font-light">+57 320 548 639</p>

                            <p className="font-bold">Current Address</p>
                            <p className="font-light">Beech Creek, PA, Pensilvania</p>
                            <p className="font-bold">Permanent Address</p>
                            <p className="font-light">Arlington Heights, IL, Illinois</p>
                            
                            <p className="font-bold">Email</p>
                            <p className="font-light">jane@example</p>
                            <p className="font-bold">Birthday</p>
                            <p className="font-light">Feb 06, 1998</p>
                        </div>
                    </div>
                    <div className='flex py-3 justify-center items-center'>
                        <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Modify Info</button>
                        <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete</button>
                    </div>
                </div>
            </div>
    );
}

export default Profile;