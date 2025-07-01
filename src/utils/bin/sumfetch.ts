import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {

  return `
                                                         .~JJ??~               
                                                        .57:..:75.                 sumfetch
                                                        !B      B~                -----------
                                                         JY~^^~Y?                 ℹ️ ABOUT
                                       :!7777:            :~YY~:                  👋 Hi! I'm ${config.name}
                                      75^..:~P~             !~                    🧑🏼 They/Them
                                      G!     !#7?77777777?P7J^                    🧑🏼‍🎓 Student at UAH studying computer science and physics
                                      ~57^:^7P^          :B                       📝 <u><a href="${config.resume_url}" target="_blank">Resume</a></u>
    .^!~:               .:.            .^!7!^.           :B                       📁 <u><a href="${config.websiteRepo}" target="_blank">Website Repository</a></u>
  .?J7~~75~           ~P#&#G!                          ~P#@B5^                    
 !G     .B7!!!!!!!!!?@@@@@@@!                        ~@@@@@@&:                    
 ^G~   .?5...........5@@@@@B^    ...............     :B@@@@@P.                    
   :????J!             ^?J?~.  .JP#&&&&&&&&&&&&&&BG7    ~?J?^                     
                               P@@@@@@@@@@@@@@@@@@@@J                             
                               G@@@@@@@@@@@@@@@@@@@@B                             
                      .75PY!   G@@@@@@@@@@@@@@@@@@@@B   :7?!:      :77??7^        -----------
           ..........^#@@@@@G  G@@@@@@@@@@@@@@@@@@@@B .P@@@@@Y....!5~. .^Y?       ⌯⌲ CONTACT 
          PJ777777777J@@@@@@#  G@@@@@@@@@@@@@@@@@@@@B !@@@@@@@J777B7     ~B       📧 <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
          B^          ^YB#GY:  G@@@@@@@@@@@@@@@@@@@@B  ?B&@&B7    :J7^^^7P!         <u><a href="https://github.com/${config.social.github}" target="_blank">GitHub</a></u>
          G^                   G@@@@@@@@@@@@@@@@@@@@B    :::        :~!!~.        📝 <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">LinkedIn</a></u>
          G^                   G@@@@@@@@@@@@@@@@@@@@G                          
       .!7GJ7:         .~~^.   ~G@@@@@@@@@@@@@@@@@&G:   .~~^.                     -----------
      ~P!:..~57      .J#@@@#?    ^^^^^^^^^^^^^^^^^:   .5&@@@&J                    💸 DONATE 
      YJ     :#      ^@@@@@@&.                        !@@@@@@@^                   💲 <u><a href="${config.donate_urls.venmo}" target="_blank">Venmo</a></u>
      :5?^.:!57       Y&@@@#7                          ?#@@@#J                    ☕ <u><a href="${config.donate_urls.coffee}" target="_blank">Buy me a coffee</a></u>
        ~77!~.         .!G:.                             !#^                   
                       .!G..            .7???7~          :B                    
                     :??7~7Y?.         :P!...:?5.........^#                    
                    .G~     Y?         !G      #J7????????J                    
                     Y!    .57         .?J~^^!Y7                               
                      !J!7?J~            :~!!~.                                
                       .::.                                                    
`
};
  
export default sumfetch;
