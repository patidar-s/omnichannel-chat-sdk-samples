import { orgId, orgUrl, widgetId } from '@env';

const fetchOmnichannelConfig = () => {
    const omnichannelConfig = {
        orgUrl: "https://orga832080c-crm.omnichannelengagementhub.com",
        orgId: "db0aa0c5-2007-4952-bbc9-7a4295f356ab",
        widgetId: "e2ebfef6-5ee8-4410-986b-5bad54951a42",
        dataRenderMobile: true,
        dataHideChatButton: true,
    };

    return omnichannelConfig;
}

export default fetchOmnichannelConfig;