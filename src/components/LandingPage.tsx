@@ .. @@
 import React, { useState } from 'react';
 import { Shield, Clock, MapPin, Phone, Users, Heart, Star, CheckCircle, ArrowRight, Stethoscope, Activity, Zap, Award } from 'lucide-react';
 import { DezSaudeLogo } from './Logo';
-import { PharmacySelection } from './PharmacySelection';
-import { LeadForm } from './LeadForm';

 export function LandingPage() {
   const [currentStep, setCurrentStep] = useState(1);
   const [selectedPharmacy, setSelectedPharmacy] = useState<any>(null);

   const handlePharmacySelect = (pharmacy: any) => {
     setSelectedPharmacy(pharmacy);
     setCurrentStep(3);
   };

   const handleFormComplete = () => {
     setCurrentStep(1);
     setSelectedPharmacy(null);
   };

-  if (currentStep === 2) {
-    return (
-      <PharmacySelection 
-        onPharmacySelect={handlePharmacySelect}
-        onBack={() => setCurrentStep(1)}
-      />
-    );
-  }
-
-  if (currentStep === 3 && selectedPharmacy) {
-    return (
-      <LeadForm 
-        pharmacy={selectedPharmacy}
-        onComplete={handleFormComplete}
-        onBack={() => setCurrentStep(2)}
-      />
-    );
-  }
+  // Temporariamente desabilitado para debug
+  // if (currentStep === 2) {
+  //   return (
+  //     <PharmacySelection 
+  //       onPharmacySelect={handlePharmacySelect}
+  //       onBack={() => setCurrentStep(1)}
+  //     />
+  //   );
+  // }
+
+  // if (currentStep === 3 && selectedPharmacy) {
+  //   return (
+  //     <LeadForm 
+  //       pharmacy={selectedPharmacy}
+  //       onComplete={handleFormComplete}
+  //       onBack={() => setCurrentStep(2)}
+  //     />
+  //   );
+  // }

   return (
     <div className="min-h-screen bg-white">
@@ .. @@
               <div className="flex flex-col sm:flex-row gap-4">
                 <button 
-                  onClick={() => setCurrentStep(2)}
+                  onClick={() => alert('Funcionalidade em desenvolvimento - Supabase precisa ser configurado')}
                   className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 text-lg"
                 >
                   <span>Contratar Agora</span>
@@ .. @@
               <button 
-                onClick={() => setCurrentStep(2)}
+                onClick={() => alert('Funcionalidade em desenvolvimento - Supabase precisa ser configurado')}
                 className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
               >
                 Contratar Agora
@@ .. @@
               <button 
-                onClick={() => setCurrentStep(2)}
+                onClick={() => alert('Funcionalidade em desenvolvimento - Supabase precisa ser configurado')}
                 className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
               >
                 Contratar Agora
@@ .. @@
               <button 
-                onClick={() => setCurrentStep(2)}
+                onClick={() => alert('Funcionalidade em desenvolvimento - Supabase precisa ser configurado')}
                 className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
               >
                 Contratar Agora
@@ .. @@
           <div className="text-center mt-12">
             <button 
-              onClick={() => setCurrentStep(2)}
+              onClick={() => alert('Funcionalidade em desenvolvimento - Supabase precisa ser configurado')}
               className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-lg"
             >
               Contratar Proteção Completa
@@ .. @@
           <button 
-            onClick={() => setCurrentStep(2)}
+            onClick={() => alert('Funcionalidade em desenvolvimento - Supabase precisa ser configurado')}
             className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
           >
             <span>Contratar Plano Dez Emergências</span>