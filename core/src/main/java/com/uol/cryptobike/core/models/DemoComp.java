/*
 * ***********************************************************************
 * Cryto Bike CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Cryto Bike.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Cryto Bike and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Cryto Bike
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Cryto Bike.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models;

import java.util.Calendar;
import java.util.List;
import com.adobe.cq.wcm.core.components.models.Image;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code DemoComp} Sling Model used for the {@code cryptobike/content/demo-comp} component.
 * 
 */
@ConsumerType
public interface DemoComp {


    String getGlobalTextfieldTest();

    String getSharedTextfieldTest();

    /**
     * Returns a text value tooltip used somewhere in the component
     * 
     * @return String
     * 
     */
    String getTextfieldTest();

    Boolean getCheckTest();

    String getPathfieldTest();

    String getPagefieldTest();

    List<String> getTagfieldTest();

    String getTextareaTest();

    Calendar getDateTest();

    String getSelectTest();

    String getRadioTest();

    String getHiddenTest();

    Long getNumberfieldTest();

    Image getImageTest();

    List<String> getColors();

    List<DemoLink> getLinks();

}
