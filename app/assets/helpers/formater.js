

export const formater = async(data) =>{
    if(!data.data?.docs[0]){
        return {}
    }
    const specificdata = data.data?.docs[0];
    const formatedData = {};
    specificdata.backgroundImage?.sizes.card.url ? formatedData.mainImg = specificdata.backgroundImage?.sizes.card.url : ''
    specificdata.header?.mainTitle ? formatedData.title = specificdata.header?.mainTitle : ''
    specificdata.header?.mainSubtitle ? formatedData.subtitle = specificdata.header.mainSubtitle : ''
    specificdata.header?.instructions ? formatedData.instruction = specificdata.header.instructions : ''
    specificdata.form?.['Find Button'] ? formatedData.findBtnText = specificdata.form?.['Find Button'] : ''
    specificdata.form?.formFields ? formatedData.formFields = specificdata.form?.formFields : ''
    specificdata.form?.termsLabel ? formatedData.termsAndConditionsTxt = specificdata.form?.termsLabel : ''
    specificdata.form?.terms ? formatedData.termsAndConditionsURL = specificdata.form?.terms : ''
    specificdata.previewForm?.titlePreview ? formatedData.titlePreview = specificdata.previewForm?.titlePreview : ''
    specificdata.previewForm?.intructionsPreview ? formatedData.intructionsPreview = specificdata.previewForm?.intructionsPreview : ''
    specificdata.previewForm?.textPreview ? formatedData.textPreview = specificdata.previewForm?.textPreview : ''
    specificdata.previewForm?.sendButtonPreview ? formatedData.sendButtonPreview = specificdata.previewForm?.sendButtonPreview : ''
    specificdata.repList?.mainP ? formatedData.note = specificdata.repList?.mainP :''
    specificdata.repList?.mpLabel ? formatedData.positionName = specificdata.repList?.mpLabel : ''
    specificdata.repList?.senatorLabel ? formatedData.senatorLabel = specificdata.repList?.senatorLabel : ''
    specificdata.emailForm?.emailUserLabel ? formatedData.emailFormUserLabel = specificdata.emailForm?.emailUserLabel :''
    specificdata.emailForm?.infoRepLabel ? formatedData.emailFormInfoRepLabel = specificdata.emailForm?.infoRepLabel :''
    specificdata.emailForm?.subjectPlaceholder ? formatedData.emailFormSubjectPlaceholder = specificdata.emailForm?.subjectPlaceholder :''
    specificdata.emailForm?.userNameLabel ? formatedData.emailFormUserNameLabel = specificdata.emailForm?.userNameLabel :''
    specificdata.emailForm?.userNamePlaceholder ? formatedData.emailFormUserNamePlaceholder = specificdata.emailForm?.userNamePlaceholder :''

    return formatedData
}
