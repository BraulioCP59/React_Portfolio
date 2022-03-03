import React from 'react';
import mainAppImage from './rental_finder.jpg'
import budgetTrackerImage from './budget_tracker.PNG'
import noteTakerImage from './note_taker.PNG'
import techBlogImage from './tech_blog.jpg'
import weatherDashImage from './weather_dash_temp.jpg'

function Portfolio()
{
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-center bg-gray-100 p-10">
 
                <div class="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        <div class="font-mono font-semibold text-xl bg-gray-200 text-gray-700 text-lg px-6 py-4">Main APP</div>

                        <div class="flex justify-between items-center px-3 py-3">
                            <img src={mainAppImage} alt="Featured Application" className=""/>
                        </div>
                        
                        <div class="px-6 py-4 border-t border-gray-200">
                        Description:
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        Deployed: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://rental-finders.herokuapp.com/'>rental-finders.herokuapp.com/</a>
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        GitHub: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://github.com/BraulioCP59/rental-finder'>github.com/BraulioCP59/rental-finder</a>
                        </div>

                        <div class="bg-gray-200 px-6 py-1">
                            <section className="mb-6">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                    Tools:
                                </div>
                                <div className="flex justify-evenly w-full">
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-9">Bootstrap</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-9">Docker</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-9">Git</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-9">Bitbucket</span>
                                </div>
                            </section>
                        </div>
                </div>

            </div>

            <div className="flex flex-wrap justify-center justify-evenly bg-gray-100 p-10">
                <div class="w-1/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        
                        <div class="font-mono font-semibold text-xl bg-gray-200 text-gray-700 text-lg px-6 py-4">Tech Blog</div>
                        <div class="flex justify-between items-center px-3 py-3">
                            <img src={techBlogImage} alt="Featured Application" className=""/>
                        </div>

                        
                        <div class="px-6 py-4 border-t border-gray-200">
                        Description:
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        Deployed: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://tech-blog-brauliocp59-prod.herokuapp.com/'>tech-blog-brauliocp59-prod.herokuapp.com/</a>
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        GitHub: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://github.com/BraulioCP59/TechBlog_MVC'>github.com/BraulioCP59/TechBlog_MVC</a>
                        </div>

                        <div class="bg-gray-200 px-6 py-1">
                            <section className="mb-6">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                    Tools:
                                </div>
                                <div className="flex justify-evenly w-full">
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bootstrap</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Docker</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Git</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bitbucket</span>
                                </div>
                            </section>
                        </div>
                </div>

                <div class="w-1/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        
                        <div class="font-mono font-semibold text-xl bg-gray-200 text-gray-700 text-lg px-6 py-4">Online/Offline Budget Tracker</div>
                        <div class="flex justify-between items-center px-3 py-3">
                            <img src={budgetTrackerImage} alt="Featured Application" className=""/>
                        </div>

                        
                        <div class="px-6 py-4 border-t border-gray-200">
                        Description:
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        Deployed: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://budget-tracker-brauliocp59.herokuapp.com/'>budget-tracker-brauliocp59.herokuapp.com/</a>
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        GitHub: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://github.com/BraulioCP59/Online-Online_Budget_Tracker'>github.com/BraulioCP59/Online-Online_Budget_Tracker</a>
                        </div>

                        <div class="bg-gray-200 px-6 py-1">
                            <section className="mb-6">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                    Tools:
                                </div>
                                <div className="flex justify-evenly w-full">
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bootstrap</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Docker</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Git</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bitbucket</span>
                                </div>
                            </section>
                        </div>
                </div>
                
            </div>

            <div className="flex flex-wrap justify-center justify-evenly bg-gray-100 p-10">
                <div class="w-1/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        
                        <div class="font-mono font-semibold text-xl bg-gray-200 text-gray-700 text-lg px-6 py-4">Weather Dashboard</div>
                        <div class="flex justify-between items-center px-3 py-3">
                            <img src={weatherDashImage} alt="Featured Application" className=""/>
                        </div>

                        
                        <div class="px-6 py-4 border-t border-gray-200">
                        Description:
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        Deployed: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://brauliocp59.github.io/Weather_Dashboard_ServerSide_APIs/'>brauliocp59.github.io/Weather_Dashboard_ServerSide_APIs/</a>
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        GitHub: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://github.com/BraulioCP59/Weather_Dashboard_ServerSide_APIs'>github.com/BraulioCP59/Weather_Dashboard_ServerSide_APIs</a>
                        </div>

                        <div class="bg-gray-200 px-6 py-1">
                            <section className="mb-6">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                    Tools:
                                </div>
                                <div className="flex justify-evenly w-full">
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bootstrap</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Docker</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Git</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bitbucket</span>
                                </div>
                            </section>
                        </div>
                </div>

                <div class="w-1/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                        
                        <div class="font-mono font-semibold text-xl bg-gray-200 text-gray-700 text-lg px-6 py-4">Note Taker</div>
                        <div class="flex justify-between items-center px-3 py-3">
                            <img src={noteTakerImage} alt="Featured Application" className="h-60"/>
                        </div>

                        
                        <div class="px-6 py-4 border-t border-gray-200">
                        Description:
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        Deployed: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://note-taker--brauliocp59.herokuapp.com/notes'>note-taker--brauliocp59.herokuapp.com/notes</a>
                        </div>

                        <div class="px-6 py-4 border-t border-gray-200">
                        GitHub: <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://github.com/BraulioCP59/Note_taker_ExpressJS'>github.com/BraulioCP59/Note_taker_ExpressJS</a>
                        </div>

                        <div class="bg-gray-200 px-6 py-1">
                            <section className="mb-6">
                                <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                                    Tools:
                                </div>
                                <div className="flex justify-evenly w-full">
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bootstrap</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Docker</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Git</span>
                                    <span className="rounded-xl bg-cool-green text-corn-silk px-6">Bitbucket</span>
                                </div>
                            </section>
                        </div>
                </div>
                
            </div>
        </div>
    );
}

export default Portfolio;
