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

package com.uol.cryptobike.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.uol.cryptobike.core.models.Footer;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Footer.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/footer")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FooterImpl
    implements Footer
{

    @SlingObject
    private Resource resource;

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
