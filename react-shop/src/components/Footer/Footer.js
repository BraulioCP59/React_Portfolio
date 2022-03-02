import logoGithub from './logo-github.svg';
import logoStackOverflow from './logo-stackoverflow.svg';
import logoLinkedIn from './logo-linkedin.svg';

function Footer ({/*props*/}) {
    return (
        <div className="text-center bg-gray-900 text-white">
          <div class="container px-6 pt-6">
            <div class="flex justify-evenly">

              <div>
                <img
                  src={logoGithub}
                  className="inline w-6 mr-4"
                  alt="GitHub Logo"
                  />
                <a href="https://github.com/BraulioCP59" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>

              <div>
                <img
                  src={logoStackOverflow}
                  className="inline w-6 mr-4"
                  alt="Stack Overflow Logo"
                  />
                <a href="https://stackoverflow.com/users/16676663/braulio-mora?tab=profile" target="_blank" rel="noopener noreferrer">StackOverflow</a>
              </div>

              <div>
                <img
                  src={logoLinkedIn}
                  className="inline w-6 mr-4"
                  alt="Stack Overflow Logo"
                  />
                <a href="https://www.linkedin.com/in/braulio-mora-66a033160/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>



            </div>
          </div>
      </div>
    );
  }
  
  export default Footer;

