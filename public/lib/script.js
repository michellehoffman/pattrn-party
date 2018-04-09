const handleClick = event => {
  const activeTab = event.target;
  const tabNum = activeTab.innerText.slice(-1);
  const allTabs = $('.tab')
  const tabsArray = [...allTabs];
  const inactiveTabs = tabsArray.filter(h3 => h3 != activeTab)
  const allContentDivs = $('.tab-content')
  const divsArray = [...allContentDivs];
  const activeDiv = divsArray.find(div => div.id === `tab-${tabNum}`)
  const inactiveDivs = divsArray.filter(div => div != activeDiv)

  activeTab.setAttribute('class', 'tab button-active')
  activeDiv.setAttribute('class', 'tab-content active');
  inactiveTabs.forEach(tab => tab.setAttribute('class', 'tab button-inactive'))
  inactiveDivs.forEach(div => div.setAttribute('class', 'tab-content inactive'))
}

const dropDownMenu = () => {
  $('.nav').addClass('show')
}

$('.tab').on('click', handleClick);
$('nav').on('click', dropDownMenu);