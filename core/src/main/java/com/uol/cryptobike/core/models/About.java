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

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code About} Sling Model used for the {@code cryptobike/components/about} component.
 * 
 */
@ConsumerType
public interface About
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

}
