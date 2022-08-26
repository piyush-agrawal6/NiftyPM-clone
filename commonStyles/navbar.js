function navbar() {
  return `
       
       <nav class="navbar">
       <div>
         <a href="/Index.html">
           <div class="nifty">
             <img
               class="logo"
               src="https://niftypm.com/_nuxt/img/nifty-logo.eab2f7a.svg"
               alt=""
             />
           </div>
         </a>
         <div class="elements">
           <div>
             <p>Features</p>
             <div class="dropdown">
               <div>❤ Learn how Nifty inspires productivity!</div>
               <div>
                 <a
                   href="/punchy-flowers-9069/features/Html files/discussions.html"
                   >Discussions</a
                 >
                 <a
                   href="/punchy-flowers-9069/features/Html files/milestones.html"
                   >Milestone (Gantt Chart)</a
                 >
                 <a href="/punchy-flowers-9069/features/Html files/tasks.html"
                   >Tasks</a
                 >
                 <a href="/punchy-flowers-9069/features/Html files/docs.html"
                   >Docs & Files</a
                 >
                 <a href="/punchy-flowers-9069/features/Html files/time.html"
                   >Time Tracking</a
                 >
                 <a
                   href="/punchy-flowers-9069/features/Html files/reporting.html"
                   >Reporting</a
                 >
                 <a
                   href="/punchy-flowers-9069/features/Html files/projectHome.html"
                   >Project Home</a
                 >
                 <a
                   href="/punchy-flowers-9069/features/Html files/projectPortfolios.html"
                   >Project Portfolios</a
                 >
               </div>
             </div>
           </div>
           <div>
             <p>Use Cases</p>
             <div class="dropdown">
               <div>
                 ❤ Nifty is very flexible. Here are a few examples of how you can
                 use it.
               </div>
               <div>
                 <a href="/punchy-flowers-9069/useCases/agileDev.html"
                   >Agile Development</a
                 >
                 <a href="/punchy-flowers-9069/useCases/client.html"
                   >Client Management)</a
                 >
                 <a href="/punchy-flowers-9069/useCases/digital.html"
                   >Digital Agencies</a
                 >
                 <a href="/punchy-flowers-9069/useCases/legal.html"
                   >Legal Case Management</a
                 >
                 <a href="/punchy-flowers-9069/useCases/marketing.html"
                   >Marketing Teams</a
                 >
                 <a href="/punchy-flowers-9069/useCases/product.html"
                   >Product Teams</a
                 >
               </div>
             </div>
           </div>
           <div>
             <p>Resources</p>
             <div class="dropdown">
               <div></div>
               <div>
                 <a href="/punchy-flowers-9069/resources/apps.html">Apps</a>
                 <a href="/punchy-flowers-9069/resources/blog.html">Blog</a>
                 <a href="/punchy-flowers-9069/resources/Integrations.html"
                   >Integrations</a
                 >
                 <a href="/punchy-flowers-9069/resources/helpCenter.html"
                   >Help Center</a
                 >
                 <a href="/punchy-flowers-9069/resources/security.html"
                   >Security</a
                 >
                 <!-- Calendly link widget begin -->
                 <link
                   href="https://assets.calendly.com/assets/external/widget.css"
                   rel="stylesheet"
                 />
                 <script
                   src="https://assets.calendly.com/assets/external/widget.js"
                   type="text/javascript"
                   async
                 ></script>
                 <a
                   class="demo"
                   href=""
                   onclick="Calendly.initPopupWidget({url: 'https://calendly.com/agrawaljoy1'});return false;"
                   >Get a demo</a
                 >
                 <!-- Calendly link widget end -->
               </div>
             </div>
           </div>
           <div>
             <a href="/punchy-flowers-9069/useCases/client.html">Got Clients?</a>
           </div>
           <div>
             <a href="/punchy-flowers-9069/pricing/pricing.html">Pricing</a>
           </div>
           <div>
             <!-- Calendly link widget begin -->
             <link
               href="https://assets.calendly.com/assets/external/widget.css"
               rel="stylesheet"
             />
             <script
               src="https://assets.calendly.com/assets/external/widget.js"
               type="text/javascript"
               async
             ></script>
             <a
               class="demo"
               href=""
               onclick="Calendly.initPopupWidget({url: 'https://calendly.com/agrawaljoy1'});return false;"
               >Get a demo</a
             >
             <!-- Calendly link widget end -->
           </div>
         </div>
         <div class="log">
           <button class="login">
             <a href="/punchy-flowers-9069/login/login.html">Login</a>
           </button>
           <button class="signup">
             <a href="/punchy-flowers-9069/signUp/signUp.html">Sign Up</a>
           </button>
         </div>
       </div>
     </nav>
       
       `;
}

export default navbar;