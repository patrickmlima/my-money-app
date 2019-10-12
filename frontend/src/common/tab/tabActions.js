export function selectTab(tabId) {
    console.log('selecting tab: ', tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}