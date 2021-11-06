import { useTranslation} from 'react-i18next'


export function ULGroundFloor() {

    const { t } = useTranslation()

    return (
        <div className="ul-wrapper">
            <div className="ul-container">
                <ul className="ul-floor">
                    <li>{t("apartment.ground_floor.first_li")}</li>
                    <li>{t("apartment.ground_floor.second_li")}</li>
                    <li>{t("apartment.ground_floor.third_li")}</li>
                    <li>{t("apartment.ground_floor.fourth_li")}</li>
                    <li>{t("apartment.ground_floor.fifth_li")}</li>
                </ul>
            </div>
        </div>
    )
}

export function ULFirstFloor() {

    const { t } = useTranslation()

    return (
        <div className="ul-wrapper">
            <div className="ul-container">
                <ul className="ul-floor">
                    <li>{t("apartment.first_floor.first_li")}</li>
                    <li>{t("apartment.first_floor.second_li")}</li>
                    <li>{t("apartment.first_floor.third_li")}</li>
                    <li>{t("apartment.first_floor.fourth_li")}</li>
                    <li>{t("apartment.first_floor.fifth_li")}</li>
                    <li>{t("apartment.first_floor.sixth_li")}</li>
                </ul>
            </div>
        </div>
    )
}

